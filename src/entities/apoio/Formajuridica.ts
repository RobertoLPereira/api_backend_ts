import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("formajuridica_pkey", ["id"], { unique: true })
@Entity("formajuridica", { schema: "apoio" })
export class Formajuridica {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character", {
    name: "denominacao",
    nullable: true,
    length: 50,
    default: () => "NULL::bpchar",
  })
  denominacao: string | null;
}
