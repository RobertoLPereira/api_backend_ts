import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("tipoendereco_pkey", ["idtipoendereco"], { unique: true })
@Entity("tipoendereco", { schema: "delivery" })
export class Tipoendereco {
  @PrimaryGeneratedColumn({ type: "integer", name: "idtipoendereco" })
  idtipoendereco: number;

  @Column("character", {
    name: "denominacao",
    nullable: true,
    length: 15,
    default: () => "NULL::bpchar",
  })
  denominacao: string | null;
}
