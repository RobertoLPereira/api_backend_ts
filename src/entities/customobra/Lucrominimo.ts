import { Column, Entity, Index } from "typeorm";

@Index("lucrominimo_pk", ["empresa"], { unique: true })
@Entity("lucrominimo", { schema: "customobra" })
export class Lucrominimo {
  @Column("integer", { primary: true, name: "empresa" })
  empresa: number;

  @Column("real", { name: "taxadelucro", nullable: true, precision: 24 })
  taxadelucro: number | null;
}
