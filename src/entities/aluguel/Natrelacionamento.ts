import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("naturezarelacionamento_denominacao_key", ["denominacao"], {
  unique: true,
})
@Index("naturezarelacionamento_pkey", ["id"], { unique: true })
@Entity("natrelacionamento", { schema: "aluguel" })
export class Natrelacionamento {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", {
    name: "denominacao",
    unique: true,
    length: 20,
  })
  denominacao: string;
}
