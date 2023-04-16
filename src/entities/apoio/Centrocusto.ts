import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("centrocusto_pkey", ["idcentrocusto"], { unique: true })
@Entity("centrocusto", { schema: "apoio" })
export class Centrocusto {
  @Column("integer", { name: "idgrupoCentroCusto" })
  idgrupoCentroCusto: number;

  @PrimaryGeneratedColumn({ type: "integer", name: "idcentrocusto" })
  idcentrocusto: number;

  @Column("character varying", { name: "Denominacao", length: 45 })
  denominacao: string;

  @Column("integer", { name: "idCentroCustoMestre", nullable: true })
  idCentroCustoMestre: number | null;
}
