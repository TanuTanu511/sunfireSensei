import { Company } from "../models/companyModel.js";
export const registerCompany = async (req, res) => {
  try {
    const { companyName , description} = req.body;
    if (!companyName) {
      return res.status(400).json({ message: "Company name is required" });
    }

    if (!description) {
      return res.status(400).json({ message: "Description is required" });
    }

    let company = await Company.findOne({ name: companyName });
    if (company) {
      return res.status(400).json({ message: "Company already exists" });
    }

    company = await Company.create({
      name: companyName,
      description,
      userId: req.id,
    });

    return res.status(201).json({
      message: "Company created successfully",
      company,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllCompanies = async (req, res) => {
  try {
    const userId = req.id; //logged In user id
    let companies = await Company.find({ userId });
    if (!companies) {
      return res.status(404).json({ message: "No Companies Found" });
    }
    return res.status(200).json({
        companies,
        success:true,
    });
  } catch (error) {
    console.log(error);
  }
};

//get company by Id
export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    let company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({ message: "No Company Found" });
    }
    return res.status(200).json({ company, success: true });
  } catch (error) {
    console.log(error);
  }
};

//update company details
export const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;
    const file = req.file;
    //claudinary

    const updateData = { name, description, website, location };
    const company = await Company.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });
    if (!company) {
      return res.status(404).json({ message: "No Company Found" });
    }
    return res.status(200).json({ message: "company updated", success: true });
  } catch (error) {
    console.log(error);
  }
};
