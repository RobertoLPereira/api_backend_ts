import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("tiporelacionamento_pkey", ["idtiporelacionamento"], { unique: true })
@Index("fki_tiporelacionamentoSubtipo", ["idtiporelacionamento"], {})
@Entity("tiporelacionamento", { schema: "aluguel" })
export class Tiporelacionamento {
  @PrimaryGeneratedColumn({ type: "integer", name: "idtiporelacionamento" })
  idtiporelacionamento: number;

  @Column("character", {
    name: "denominacao",
    nullable: true,
    length: 15,
    default: () => "NULL::bpchar",
  })
  denominacao: string | null;
}
