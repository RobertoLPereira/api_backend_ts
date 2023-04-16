import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Pessoa } from "./Pessoa";
import { Bem } from "./Bem";

@Index("fki_fk_bembens", ["idbem"], {})
@Index("bempessoa_pkey", ["idbempessoa"], { unique: true })
@Index("fki_fk_bempessoas", ["idpessoa"], {})
@Entity("bempessoa", { schema: "cup" })
export class Bempessoa {
  @Column("integer", { name: "idbem" })
  idbem: number;

  @Column("integer", { name: "idpessoa" })
  idpessoa: number;

  @PrimaryGeneratedColumn({ type: "integer", name: "idbempessoa" })
  idbempessoa: number;

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.bempessoas)
  @JoinColumn([{ name: "idpessoa", referencedColumnName: "idpessoa" }])
  idpessoa2: Pessoa;

  @ManyToOne(() => Bem, (bem) => bem.bempessoas)
  @JoinColumn([{ name: "idbem", referencedColumnName: "idbem" }])
  idbem2: Bem;
}
