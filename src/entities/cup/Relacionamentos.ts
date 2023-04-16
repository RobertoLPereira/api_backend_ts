import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Pessoa } from "./Pessoa";

@Index("relacionamentos_pkey", ["id"], { unique: true })
@Index("fki_fk_tiporelac", ["idnaturezatipo"], {})
@Index("fki_fk_pessoarelac", ["idpessoa"], {})
@Index("fki_fk_relacpessoa", ["idpessoarelacionada"], {})
@Entity("relacionamentos", { schema: "cup" })
export class Relacionamentos {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "idpessoa", default: () => "0" })
  idpessoa: number;

  @Column("integer", { name: "idnaturezatipo", default: () => "0" })
  idnaturezatipo: number;

  @Column("integer", { name: "idpessoarelacionada", default: () => "0" })
  idpessoarelacionada: number;

  @Column("date", { name: "vinculadoem", nullable: true })
  vinculadoem: string | null;

  @Column("date", { name: "desvinculadoem", nullable: true })
  desvinculadoem: string | null;

  @Column("integer", { name: "tempoemservico", nullable: true })
  tempoemservico: number | null;

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.relacionamentos)
  @JoinColumn([{ name: "idpessoa", referencedColumnName: "idpessoa" }])
  idpessoa2: Pessoa;

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.relacionamentos2)
  @JoinColumn([
    { name: "idpessoarelacionada", referencedColumnName: "idpessoa" },
  ])
  idpessoarelacionada2: Pessoa;
}
