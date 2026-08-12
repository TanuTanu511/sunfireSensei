import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";

const AppliedJobs = () => {
  return (
    <div>
      <Table>
        <TableCaption>Recent Applied Jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job title</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className={"text-right"}>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1].map((item, index) => (
            <TableRow key={index}>
              <TableCell>15-07-2026</TableCell>
              <TableCell>Software Engineer</TableCell>
              <TableCell>Microsoft</TableCell>
              <TableHead className={"text-right"}>
                <Badge className="bg-blue-200 p-4 my-3">Selected</Badge>
              </TableHead>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobs;
