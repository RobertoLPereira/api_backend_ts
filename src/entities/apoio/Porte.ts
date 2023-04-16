import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("porte_pkey", ["id"], { unique: true })
@Entity("porte", { schema: "apoio" })
export class Porte {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character", {
    name: "denominacao",
    nullable: true,
    length: 20,
    default: () => "NULL::bpchar",
  })
  denominacao: string | null;

  @Column("numeric", {
    name: "faixaInicial",
    nullable: true,
    precision: 10,
    scale: 2,
    default: () => "0.00",
  })
  faixaInicial: string | null;

  @Column("numeric", {
    name: "faixaFinal",
    nullable: true,
    precision: 10,
    scale: 2,
    default: () => "0.00",
  })
  faixaFinal: string | null;
}
