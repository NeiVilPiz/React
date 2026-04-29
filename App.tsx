import { DataTable } from "./components/DataTable";

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

const columnas = [
  { key: "nombre", label: "Nombre" },
  { key: "edad", label: "Edad" },
  { key: "nota", label: "Nota" }
] as const;

export default function App() {
  return (
    <div>
      <h1>Tabla de Estudiantes</h1>
      <DataTable data={estudiantes} columns={columnas} />
    </div>
  );
}