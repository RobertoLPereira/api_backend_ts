import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Pessoa } from "./Pessoa";
import { Bem } from "./Bem";

@Index("fki_fk_bemvinculado", ["idbemprincipal"], {})
@Index("bensvinculados_pkey", ["idbemvinculado"], { unique: true })
@Index("fki_fk_pessoavenculo", ["idpessoa"], {})
@Entity("bensvinculados", { schema: "cup" })
export class Bensvinculados {
  @Column("integer", { name: "idpessoa", nullable: true })
  idpessoa: number | null;

  @Column("integer", { name: "idbemprincipal", nullable: true })
  idbemprincipal: number | null;

  @Column("integer", { primary: true, name: "idbemvinculado" })
  idbemvinculado: number;

  @Column("character", {
    name: "denominacaovinculo",
    nullable: true,
    length: 20,
  })
  denominacaovinculo: string | null;

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.bensvinculados)
  @JoinColumn([{ name: "idpessoa", referencedColumnName: "idpessoa" }])
  idpessoa2: Pessoa;

  @ManyToOne(() => Bem, (bem) => bem.bensvinculados)
  @JoinColumn([{ name: "idbemprincipal", referencedColumnName: "idbem" }])
  idbemprincipal2: Bem;
}
