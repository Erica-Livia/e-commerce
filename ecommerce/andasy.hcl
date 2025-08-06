# andasy.hcl app configuration file generated for ecommerce on Wednesday, 06-Aug-25 15:12:24 CAT
#
# See https://github.com/quarksgroup/andasy-cli for information about how to use this file.

app_name = "ecommerce"

app {

  env = {}

  port = 80

  compute {
    cpu      = 1
    memory   = 256
    cpu_kind = "shared"
  }

  process {
    name = "ecommerce"
  }

}
