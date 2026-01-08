import "react-data-grid/lib/styles.css";
import { DataGrid } from "react-data-grid";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { Download } from "lucide-react";

const Table = ({ myContribution }) => {
  const columns = [
    { key: "id", name: "SL NO", width: 80 },
    { key: "title", name: "Title", resizable: true },
    { key: "category", name: "Category" },
    { key: "amount", name: "Budget ($)", width: 120 },
    { key: "date", name: "Date Reported", width: 150 },
  ];

  const rows = myContribution.map((item, index) => ({
    id: index + 1,
    title: item.title,
    category: item.category,
    amount: `$${item.amount}`,
    date: item.date,
  }));

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Contribution Report", 14, 22);
    doc.setFontSize(11);
    doc.setTextColor(100);
    doc.text(`Generated on: ${new Date().toLocaleString()}`, 14, 30);
    
    const tableColumn = columns.map((col) => col.name);
    const tableRows = rows.map((row) => [row.id, row.title, row.category, row.amount, row.date]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 40,
      theme: 'grid',
      headStyles: { fillStyle: 'primary', fillColor: [16, 185, 129] },
    });

    doc.save("CleanHub_Contributions.pdf");
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-end">
        <button
            onClick={exportToPDF}
            className="btn btn-secondary rounded-2xl gap-2 shadow-lg shadow-secondary/20 font-bold"
        >
            <Download size={20} />
            Export to PDF
        </button>
      </div>
      
      <div className="rounded-2xl overflow-hidden border border-base-200 shadow-sm">
        <DataGrid 
            columns={columns} 
            rows={rows} 
            className="rdg-light h-[500px]"
            rowHeight={60}
            headerRowHeight={50}
        />
      </div>
      
      <p className="text-xs text-base-content/40 font-bold uppercase tracking-widest text-center mt-4">
        End of data • {myContribution.length} records found
      </p>
    </div>
  );
};

export default Table;
