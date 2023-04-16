import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("atendimentopadrao_pkey", ["idAtendimentoPadrao"], { unique: true })
@Entity("atendimentopadrao", { schema: "apoio" })
export class Atendimentopadrao {
  @PrimaryGeneratedColumn({ type: "integer", name: "idAtendimentoPadrao" })
  idAtendimentoPadrao: number;

  @Column("character", {
    name: "descricao",
    nullable: true,
    length: 100,
    default: () => "NULL::bpchar",
  })
  descricao: string | null;
}
