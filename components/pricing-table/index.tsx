import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    feature: "Bug Reports",
    free: "✅",
    premium: "✅",
    custom: "✅",
  },
  {
    feature: "Crash Reports",
    free: "✅",
    premium: "✅",
    custom: "✅",
  },
  {
    feature: "Crash Session Replays",
    free: "❌",
    premium: "✅",
    custom: "✅",
  },
  {
    feature: "Integrations",
    free: "All",
    premium: "All",
    custom: "All",
  },
  {
    feature: "Apps",
    free: "1",
    premium: "3",
    custom: "Unlimited",
  },
  {
    feature: "Team Members",
    free: "❌",
    premium: "4",
    custom: "Unlimited",
  },
  {
    feature: "Data Retention",
    free: "1 month",
    premium: "1 month",
    custom: "Unlimited",
  },
  {
    feature: "Priority Support",
    free: "❌",
    premium: "✅",
    custom: "✅",
  }
];

export function TableDemo() {
  return (
    <Table className="border rounded-[16px]">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow className="text-white">
          <TableHead className="font-[700] text-[18px] text-start w-[300px]">
            Fetaure
          </TableHead>
          <TableHead className="font-[700] text-[18px] text-center">
            Free
          </TableHead>
          <TableHead className="font-[700] text-[18px] text-center">
            Premium
          </TableHead>
          <TableHead className="font-[700] text-[18px] text-center">
            Custom
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice, index) => (
          <TableRow key={index} className="text-white">
            <TableCell className="font-medium text-start">
              {invoice.feature}
            </TableCell>
            <TableCell>{invoice.free}</TableCell>
            <TableCell>{invoice.premium}</TableCell>
            <TableCell className="text-center">{invoice.custom}</TableCell>
          </TableRow>
        ))}
      </TableBody>
     
    </Table>
  );
}
