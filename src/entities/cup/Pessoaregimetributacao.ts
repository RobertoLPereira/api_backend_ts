import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Pessoa } from "./Pessoa";
import { Regimetributacao } from "./Regimetributacao";

@Index("fki_fk_regimetripessoa", ["idpessoa"], {})
@Index("pk_regimepessoa", ["idpessoa", "idregimetributacao"], { unique: true })
@Index("fki_fk_tipotributacao", ["idregimetributacao"], {})
@Entity("pessoaregimetributacao", { schema: "cup" })
export class Pessoaregimetributacao {
  @Column("integer", { primary: true, name: "idpessoa" })
  idpessoa: number;

  @Column("integer", { primary: true, name: "idregimetributacao" })
  idregimetributacao: number;

  @Column("double precision", {
    name: "aliquota",
    nullable: true,
    precision: 53,
  })
  aliquota: number | null;

  @Column("character", {
    name: "status",
    nullable: true,
    length: 1,
    default: () => "'A'",
  })
  status: string | null;

  @Column("date", {
    name: "dataatualizacao",
    nullable: true,
    default: () => "now()",
  })
  dataatualizacao: string | null;

  @Column("character varying", {
    name: "idusuario",
    nullable: true,
    length: 20,
  })
  idusuario: string | null;

  @Column("character varying", {
    name: "idestacao",
    nullable: true,
    length: 50,
  })
  idestacao: string | null;

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.pessoaregimetributacaos)
  @JoinColumn([{ name: "idpessoa", referencedColumnName: "idpessoa" }])
  idpessoa2: Pessoa;

  @ManyToOne(
    () => Regimetributacao,
    (regimetributacao) => regimetributacao.pessoaregimetributacaos
  )
  @JoinColumn([
    { name: "idregimetributacao", referencedColumnName: "idregimetributacao" },
  ])
  idregimetributacao2: Regimetributacao;
}
