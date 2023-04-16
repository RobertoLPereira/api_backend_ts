import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("pk_bem_1", ["idbem"], { unique: true })
@Entity("bem_old", { schema: "cup" })
export class BemOld {
  @Column("integer", { name: "idpessoa" })
  idpessoa: number;

  @PrimaryGeneratedColumn({ type: "integer", name: "idbem" })
  idbem: number;

  @Column("integer", { name: "idtipobem" })
  idtipobem: number;

  @Column("character varying", { name: "nomebem", nullable: true, length: 70 })
  nomebem: string | null;

  @Column("integer", { name: "idendereco" })
  idendereco: number;

  @Column("integer", { name: "idbemprincipal", nullable: true })
  idbemprincipal: number | null;

  @Column("character", { name: "situacaogarantia", nullable: true, length: 1 })
  situacaogarantia: string | null;

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

  @Column("numeric", { name: "valor", nullable: true, precision: 15, scale: 2 })
  valor: string | null;

  @Column("date", { name: "dataatualizacaocadastro", nullable: true })
  dataatualizacaocadastro: string | null;
}
