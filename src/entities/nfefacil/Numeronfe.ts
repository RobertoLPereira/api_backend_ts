import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Empresa } from "./Empresa";

@Index("numeronfe_pkey", ["ambiente", "empresa", "modelonfe", "serienfe"], {
  unique: true,
})
@Entity("numeronfe", { schema: "nfefacil" })
export class Numeronfe {
  @Column("integer", { primary: true, name: "empresa" })
  empresa: number;

  @Column("character", { primary: true, name: "serienfe", length: 3 })
  serienfe: string;

  @Column("character", { primary: true, name: "modelonfe", length: 2 })
  modelonfe: string;

  @Column("character", { primary: true, name: "ambiente", length: 1 })
  ambiente: string;

  @Column("integer", { name: "numeronfe" })
  numeronfe: number;

  @ManyToOne(() => Empresa, (empresa) => empresa.numeronfes)
  @JoinColumn([{ name: "empresa", referencedColumnName: "codigo" }])
  empresa2: Empresa;
}
