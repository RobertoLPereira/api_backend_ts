import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("pk_endereco_1", ["idendereco"], { unique: true })
@Entity("endereco_old", { schema: "cup" })
export class EnderecoOld {
  @PrimaryGeneratedColumn({ type: "integer", name: "idendereco" })
  idendereco: number;

  @Column("integer", { name: "idpessoa" })
  idpessoa: number;

  @Column("character varying", {
    name: "nomelogradouro",
    nullable: true,
    length: 115,
  })
  nomelogradouro: string | null;

  @Column("character varying", {
    name: "numerologradouro",
    nullable: true,
    length: 10,
  })
  numerologradouro: string | null;

  @Column("character varying", {
    name: "complemento",
    nullable: true,
    length: 115,
  })
  complemento: string | null;

  @Column("character varying", {
    name: "perimetro",
    nullable: true,
    length: 115,
  })
  perimetro: string | null;

  @Column("character", { name: "cep", nullable: true, length: 8 })
  cep: string | null;

  @Column("character varying", {
    name: "nomebairro",
    nullable: true,
    length: 50,
  })
  nomebairro: string | null;

  @Column("character varying", {
    name: "nomemunicipio",
    nullable: true,
    length: 50,
  })
  nomemunicipio: string | null;

  @Column("character", { name: "siglauf", nullable: true, length: 2 })
  siglauf: string | null;

  @Column("integer", { name: "idtipoendereco" })
  idtipoendereco: number;

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

  @Column("date", { name: "dataatualizacaocadastro", nullable: true })
  dataatualizacaocadastro: string | null;
}
