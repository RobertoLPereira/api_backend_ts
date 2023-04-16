import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("tipoprovadocumental_pkey", ["id"], { unique: true })
@Entity("tipoprovadocumental", { schema: "apoio" })
export class Tipoprovadocumental {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character", {
    name: "denominacao",
    nullable: true,
    length: 30,
    default: () => "NULL::bpchar",
  })
  denominacao: string | null;
}
