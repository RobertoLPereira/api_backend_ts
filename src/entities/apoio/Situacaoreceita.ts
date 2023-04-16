import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("situacaoreceita_pkey", ["id"], { unique: true })
@Entity("situacaoreceita", { schema: "apoio" })
export class Situacaoreceita {
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
