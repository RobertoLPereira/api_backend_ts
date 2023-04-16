import { Column, Entity, Index } from "typeorm";

@Index("despesasoperacionais_pkey", ["iddespesasOperacionais"], {
  unique: true,
})
@Entity("despesasoperacionais", { schema: "apoio" })
export class Despesasoperacionais {
  @Column("integer", { primary: true, name: "iddespesasOperacionais" })
  iddespesasOperacionais: number;

  @Column("character varying", { name: "Despesa", length: 45 })
  despesa: string;
}
