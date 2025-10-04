// DepartmentCard.tsx

import Link from "next/link";
import Image from "next/image";

type Department = {
  href: string;
  label: string;
  desc?: string;
  image: string;
};

export function DepartmentCard({ department }: { department: Department }) {
  const { href, label, desc, image } = department;

  return (
    <div className="department-card-container">
      <div className="department-logo-container">
        <Image
          src={image}
          alt={`${label} logo`}
          width={150}
          height={150}
          className="department-logo"
        />
      </div>
      <h3 className="department-title">{label}</h3>
      <p className="department-description">{desc}</p>
      <div className="details-button-container">
        <Link href={href}>
          <button className="details-button">
            More Details
            <span className="button-arrow">
              &rarr;
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}