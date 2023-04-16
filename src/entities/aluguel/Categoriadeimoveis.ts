import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("categoriadeimoveis_denominacao_key", ["denominacao"], { unique: true })
@Index("categoriadeimoveis_pkey", ["idcategoriadeimoveis"], { unique: true })
@Entity("categoriadeimoveis", { schema: "aluguel" })
export class Categoriadeimoveis {
  @PrimaryGeneratedColumn({ type: "integer", name: "idcategoriadeimoveis" })
  idcategoriadeimoveis: number;

  @Column("character varying", {
    name: "denominacao",
    unique: true,
    length: 20,
  })
  denominacao: string;
}
