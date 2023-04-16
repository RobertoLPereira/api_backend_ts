import { Column, Entity, Index } from "typeorm";

@Index("subtiporegistro_pkey", ["idSubTipoRegistro"], { unique: true })
@Entity("subtiporegistro", { schema: "apoio" })
export class Subtiporegistro {
  @Column("integer", {
    primary: true,
    name: "IdSubTipoRegistro",
    default: () => "1",
  })
  idSubTipoRegistro: number;

  @Column("character", {
    name: "prefixo",
    nullable: true,
    length: 4,
    default: () => "NULL::bpchar",
  })
  prefixo: string | null;

  @Column("character", {
    name: "denominacao",
    nullable: true,
    length: 100,
    default: () => "NULL::bpchar",
  })
  denominacao: string | null;

  @Column("character", { name: "subtipo", nullable: true, length: 4 })
  subtipo: string | null;
}
