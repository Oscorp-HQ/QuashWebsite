import React from "react";

const CompanyDetails = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-4">Company Details</h1>
      <p className="text-xl font-semibold mb-4">Provider of the website:</p>
      <p className="mb-4">
        BRISK LABS PRIVATE LIMITED
        <br />
        PROPERTY NO.17/L
        <br />
        18 CROSS,SECTOR 3
        <br />
        HSR LAYOUT
        <br />
        Bangalore South, Bangalore
        <br />
        Karnataka, India - 560102
      </p>
      <p className="mb-4">
        <strong>CINN:</strong> U62099KA2023PTC176072
      </p>

      <h2 className="text-xl font-semibold mb-4">Contact us:</h2>
      <ul>
        <li>
          <strong className="mb-4">Email address:</strong>{" "}
          <a href="mailto:hello@quashbugs.com" className="mb-4">
            hello@quashbugs.com
          </a>
        </li>
        <li>
          <strong className="mb-4">Quash support:</strong>{" "}
          <a
            href="support@quashbugs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4"
          >
            support@quashbugs.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CompanyDetails;
