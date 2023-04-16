import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("tipodeimovel_pkey", ["id"], { unique: true })
@Entity("tipodeimovel", { schema: "apoio" })
export class Tipodeimovel {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character", {
    name: "denominacao",
    nullable: true,
    length: 15,
    default: () => "NULL::bpchar",
  })
  denominacao: string | null;
}
