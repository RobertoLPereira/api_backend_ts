import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("tipoendereco_pkey", ["id"], { unique: true })
@Entity("tipoendereco", { schema: "apoio" })
export class Tipoendereco {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character", {
    name: "denominacao",
    nullable: true,
    length: 20,
    default: () => "NULL::bpchar",
  })
  denominacao: string | null;
}
