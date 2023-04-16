import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("situacaoimovel_pkey", ["idSituacaoImovel"], { unique: true })
@Entity("situacaoimovel", { schema: "apoio" })
export class Situacaoimovel {
  @PrimaryGeneratedColumn({ type: "integer", name: "IdSituacaoImovel" })
  idSituacaoImovel: number;

  @Column("character", {
    name: "denominacao",
    nullable: true,
    length: 20,
    default: () => "NULL::bpchar",
  })
  denominacao: string | null;
}
