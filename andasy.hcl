# andasy.hcl app configuration file generated for myecommerce on Wednesday, 06-Aug-25 16:49:25 CAT
#
# See https://github.com/quarksgroup/andasy-cli for information about how to use this file.

app_name = "myecommerce"

app {

  env = {
  HOST = "::"
  }

  port = 80

  compute {
    cpu      = 1
    memory   = 256
    cpu_kind = "shared"
  }

  process {
    name = "myecommerce"
  }

}
