import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("estadocivil_pkey", ["id"], { unique: true })
@Entity("estadocivil", { schema: "apoio" })
export class Estadocivil {
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
