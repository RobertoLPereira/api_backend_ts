import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Pessoa } from "./Pessoa";

@Index("fki_fk_dirigente", ["idpessoafisica"], {})
@Index("pk_dirigenteempresa", ["idpessoafisica", "idpessoajuridica"], {
  unique: true,
})
@Index("fki_fk_empresa", ["idpessoajuridica"], {})
@Entity("dirigenteempresa", { schema: "cup" })
export class Dirigenteempresa {
  @Column("integer", { primary: true, name: "idpessoajuridica" })
  idpessoajuridica: number;

  @Column("integer", { primary: true, name: "idpessoafisica" })
  idpessoafisica: number;

  @Column("integer", { name: "idcargo", nullable: true })
  idcargo: number | null;

  @Column("integer", { name: "idsituacao", nullable: true })
  idsituacao: number | null;

  @Column("date", { name: "dataata", nullable: true })
  dataata: string | null;

  @Column("date", { name: "dataexoneracao", nullable: true })
  dataexoneracao: string | null;

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

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.dirigenteempresas)
  @JoinColumn([{ name: "idpessoafisica", referencedColumnName: "idpessoa" }])
  idpessoafisica2: Pessoa;

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.dirigenteempresas2)
  @JoinColumn([{ name: "idpessoajuridica", referencedColumnName: "idpessoa" }])
  idpessoajuridica2: Pessoa;
}
