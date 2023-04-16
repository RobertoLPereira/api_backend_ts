import { Column, Entity, Index } from "typeorm";

@Index("custostotais_pkey", ["idcustosTotais"], { unique: true })
@Entity("custostotais", { schema: "apoio" })
export class Custostotais {
  @Column("integer", { primary: true, name: "idcustosTotais" })
  idcustosTotais: number;

  @Column("character varying", { name: "denminacao", length: 45 })
  denminacao: string;
}
