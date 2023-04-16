import { Column, Entity, Index } from "typeorm";

@Index("grupocentrocusto_pkey", ["idgrupoCentroCusto"], { unique: true })
@Entity("grupocentrocusto", { schema: "apoio" })
export class Grupocentrocusto {
  @Column("integer", { primary: true, name: "idgrupoCentroCusto" })
  idgrupoCentroCusto: number;

  @Column("character varying", { name: "Denominacao", length: 45 })
  denominacao: string;
}
