import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("postoavancado_pkey", ["id"], { unique: true })
@Entity("postoavancado", { schema: "apoio" })
export class Postoavancado {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "codigounidadeoperacional", default: () => "0" })
  codigounidadeoperacional: number;

  @Column("integer", { name: "codigoposto", default: () => "0" })
  codigoposto: number;

  @Column("integer", { name: "digitoposto", nullable: true })
  digitoposto: number | null;

  @Column("character", {
    name: "nomeposto",
    nullable: true,
    length: 40,
    default: () => "NULL::bpchar",
  })
  nomeposto: string | null;
}
