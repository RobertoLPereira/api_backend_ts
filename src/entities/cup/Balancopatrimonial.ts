import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Pessoa } from "./Pessoa";
import { Balancopatrimonialvalores } from "./Balancopatrimonialvalores";

@Index("pk_balancopatri", ["idbalancopatrimonial"], { unique: true })
@Index("fki_fk_balancocentrocusto", ["idcentrocusto"], {})
@Index("fki_fk_grupocentrocusto", ["idgrupocentrocusto"], {})
@Index("fki_fk_pessoabalancopatr", ["idpessoa"], {})
@Entity("balancopatrimonial", { schema: "cup" })
export class Balancopatrimonial {
  @Column("integer", { name: "idpessoa" })
  idpessoa: number;

  @PrimaryGeneratedColumn({ type: "integer", name: "idbalancopatrimonial" })
  idbalancopatrimonial: number;

  @Column("integer", { name: "idgrupocentrocusto" })
  idgrupocentrocusto: number;

  @Column("integer", { name: "idcentrocusto" })
  idcentrocusto: number;

  @Column("integer", { name: "anocontabil" })
  anocontabil: number;

  @Column("numeric", {
    name: "totalativo",
    nullable: true,
    precision: 10,
    scale: 2,
    default: () => "0.0",
  })
  totalativo: string | null;

  @Column("numeric", {
    name: "totalpassivo",
    nullable: true,
    precision: 10,
    scale: 2,
    default: () => "0.0",
  })
  totalpassivo: string | null;

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.balancopatrimonials)
  @JoinColumn([{ name: "idpessoa", referencedColumnName: "idpessoa" }])
  idpessoa2: Pessoa;

  @OneToMany(
    () => Balancopatrimonialvalores,
    (balancopatrimonialvalores) =>
      balancopatrimonialvalores.idbalancopatrimonial2
  )
  balancopatrimonialvalores: Balancopatrimonialvalores[];
}
