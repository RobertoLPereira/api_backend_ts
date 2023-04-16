import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Bem } from "./Bem";

@Index("pk_bemlaudo", ["data", "idbem", "idlaudo", "idpessoa"], {
  unique: true,
})
@Index("fki_fk_laudobem", ["idbem"], {})
@Entity("bemlaudo", { schema: "cup" })
export class Bemlaudo {
  @Column("integer", { primary: true, name: "idbem" })
  idbem: number;

  @Column("integer", { primary: true, name: "idpessoa" })
  idpessoa: number;

  @Column("integer", { primary: true, name: "idlaudo" })
  idlaudo: number;

  @Column("date", { primary: true, name: "data" })
  data: string;

  @Column("integer", { name: "idavaliador", nullable: true })
  idavaliador: number | null;

  @Column("double precision", {
    name: "precocub",
    nullable: true,
    precision: 53,
  })
  precocub: number | null;

  @Column("double precision", {
    name: "percentualbdi",
    nullable: true,
    precision: 53,
  })
  percentualbdi: number | null;

  @Column("double precision", {
    name: "valorcoisafeita",
    nullable: true,
    precision: 53,
  })
  valorcoisafeita: number | null;

  @Column("double precision", {
    name: "valorfinal",
    nullable: true,
    precision: 53,
  })
  valorfinal: number | null;

  @ManyToOne(() => Bem, (bem) => bem.bemlaudos)
  @JoinColumn([{ name: "idbem", referencedColumnName: "idbem" }])
  idbem2: Bem;
}
