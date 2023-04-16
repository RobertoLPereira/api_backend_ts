import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index(
  "maquinasequipamentosferramentas_pk",
  ["categoria", "empresa", "idsetor", "sequencia", "subcategoria"],
  { unique: true }
)
@Entity("maquinasequipamentosferramentas", { schema: "customobra" })
export class Maquinasequipamentosferramentas {
  @Column("integer", { primary: true, name: "empresa" })
  empresa: number;

  @Column("integer", { primary: true, name: "categoria" })
  categoria: number;

  @Column("integer", { primary: true, name: "subcategoria" })
  subcategoria: number;

  @Column("integer", { primary: true, name: "idsetor" })
  idsetor: number;

  @PrimaryGeneratedColumn({ type: "integer", name: "sequencia" })
  sequencia: number;

  @Column("character varying", {
    name: "descricaodobem",
    nullable: true,
    length: 255,
  })
  descricaodobem: string | null;

  @Column("character varying", { name: "marca", nullable: true, length: 50 })
  marca: string | null;

  @Column("character varying", { name: "modelo", nullable: true, length: 50 })
  modelo: string | null;

  @Column("timestamp without time zone", {
    name: "datadeaquisicao",
    nullable: true,
  })
  datadeaquisicao: Date | null;

  @Column("integer", { name: "quantidade", nullable: true })
  quantidade: number | null;

  @Column("numeric", { name: "precodobem", nullable: true })
  precodobem: string | null;

  @Column("real", { name: "vidadepreciavel", nullable: true, precision: 24 })
  vidadepreciavel: number | null;

  @Column("real", { name: "taxadepreciavelmes", nullable: true, precision: 24 })
  taxadepreciavelmes: number | null;

  @Column("character varying", {
    name: "depreciavel",
    nullable: true,
    length: 3,
  })
  depreciavel: string | null;

  @Column("integer", { name: "aviso", nullable: true })
  aviso: number | null;

  @Column("integer", { name: "status", nullable: true })
  status: number | null;
}
