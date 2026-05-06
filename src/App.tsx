import { DataTable } from "./components/DataTable";
import { calcularDiferenciaDias } from "./utils/date-diff";
import type { Column } from "./types";

type Estudiante = {
  id: string;
  nombre: string;
  edad: number;
  nota: number;
};

const estudiantes: Estudiante[] = [
  { id: "1", nombre: "Ana", edad: 20, nota: 8 },
  { id: "2", nombre: "Luis", edad: 22, nota: 7 }
];

const columnas: Column<Estudiante>[] = [
  { key: "nombre", label: "Nombre" },
  { key: "edad", label: "Edad" },
  { key: "nota", label: "Nota" }
];

export default function App() {
  const dias = calcularDiferenciaDias(
    new Date("2024-01-01"),
    new Date("2024-01-10")
  );

  console.log("Diferencia en días:", dias);

  return (
    <div style={{ padding: 20 }}>
      <h1>Tabla de Estudiantes</h1>
      <DataTable<Estudiante> data={estudiantes} columns={columnas} />
    </div>
  );
}