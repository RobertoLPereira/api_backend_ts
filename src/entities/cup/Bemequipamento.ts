import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Bem } from "./Bem";

@Index("fki_fk_bemequip", ["idbem"], {})
@Index("pk_bemequipamento", ["idbem"], { unique: true })
@Entity("bemequipamento", { schema: "cup" })
export class Bemequipamento {
  @Column("integer", { primary: true, name: "idbem" })
  idbem: number;

  @Column("character varying", { name: "denominacao", nullable: true })
  denominacao: string | null;

  @Column("date", { name: "datacompra", nullable: true })
  datacompra: string | null;

  @OneToOne(() => Bem, (bem) => bem.bemequipamento)
  @JoinColumn([{ name: "idbem", referencedColumnName: "idbem" }])
  idbem2: Bem;
}
