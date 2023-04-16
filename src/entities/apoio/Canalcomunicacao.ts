import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("canalcomunicacao_pkey", ["id"], { unique: true })
@Entity("canalcomunicacao", { schema: "apoio" })
export class Canalcomunicacao {
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
