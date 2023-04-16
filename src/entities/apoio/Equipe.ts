import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("equipe_pkey", ["id"], { unique: true })
@Entity("equipe", { schema: "apoio" })
export class Equipe {
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
