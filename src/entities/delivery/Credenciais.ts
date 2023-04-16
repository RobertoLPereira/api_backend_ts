import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("credenciais_pkey", ["id"], { unique: true })
@Entity("credenciais", { schema: "delivery" })
export class Credenciais {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "public_key_t", length: 100 })
  publicKeyT: string;

  @Column("character varying", { name: "access_token_t", length: 100 })
  accessTokenT: string;

  @Column("character varying", {
    name: "checkout_preference_id",
    nullable: true,
    length: 100,
  })
  checkoutPreferenceId: string | null;

  @Column("character varying", {
    name: "public_key_p",
    nullable: true,
    length: 100,
  })
  publicKeyP: string | null;

  @Column("character varying", {
    name: "access_token_p",
    nullable: true,
    length: 100,
  })
  accessTokenP: string | null;

  @Column("character varying", {
    name: "cliente_secret",
    nullable: true,
    length: 100,
  })
  clienteSecret: string | null;

  @Column("character varying", { name: "urlcheckout", length: 150 })
  urlcheckout: string;

  @Column("character varying", {
    name: "path_urlcheckout",
    nullable: true,
    length: 100,
  })
  pathUrlcheckout: string | null;

  @Column("character varying", {
    name: "client_id",
    nullable: true,
    length: 20,
  })
  clientId: string | null;

  @Column("character varying", {
    name: "collector_id",
    nullable: true,
    length: 20,
  })
  collectorId: string | null;
}
