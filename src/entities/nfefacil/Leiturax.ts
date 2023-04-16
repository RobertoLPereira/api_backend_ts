import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("leiturax_pkey", ["id"], { unique: true })
@Entity("leiturax", { schema: "nfefacil" })
export class Leiturax {
  @Column("character", { name: "tipo", nullable: true, length: 10 })
  tipo: string | null;

  @Column("date", { name: "data", nullable: true })
  data: string | null;

  @Column("double precision", { name: "valor", nullable: true, precision: 53 })
  valor: number | null;

  @Column("integer", { name: "numeronfce", nullable: true })
  numeronfce: number | null;

  @Column("character", { name: "serienfce", nullable: true, length: 3 })
  serienfce: string | null;

  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;
}
