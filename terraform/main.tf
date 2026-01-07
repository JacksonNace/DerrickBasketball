# cloud provider
provider "azurerm" {
  features {}
}

# resource group
resource "azurerm_resource_group" "sports_app" {
  name     = "group-derrickbasketball"
  location = "East US"
}

# cosmosdb
resource "azurerm_cosmosdb_account" "db" {
  name                = "cosmos-derrickbasketball"
  location            = azurerm_resource_group.sports_app.location
  resource_group_name = azurerm_resource_group.sports_app.name
  offer_type          = "Standard"
  kind                = "GlobalDocumentDB"

  capabilities {
    name = "EnableServerless"
  }

  consistency_policy {
    consistency_level = "Session"
  }

  geo_location {
    location          = azurerm_resource_group.sports_app.location
    failover_priority = 0
  }
}

# database under cosmosdb account
resource "azurerm_cosmosdb_sql_database" "db" {
  name                = "BasketballDB"
  resource_group_name = azurerm_resource_group.sports_app.name
  account_name        = azurerm_cosmosdb_account.db.name
}

# container in the database, similar to a table in sql
resource "azurerm_cosmosdb_sql_container" "games" {
  name                = "Games"
  resource_group_name = azurerm_resource_group.sports_app.name
  account_name        = azurerm_cosmosdb_account.db.name
  database_name       = azurerm_cosmosdb_sql_database.db.name
  partition_key_paths = ["/id"]
}

# azure static web app
resource "azurerm_static_web_app" "web" {
  name                = "static-derrickbasketball"
  resource_group_name = azurerm_resource_group.sports_app.name
  location            = "East US 2"
  sku_tier            = "Free"
  sku_size            = "Free"
}

# 4. Storage for Azure Functions (Required)
resource "azurerm_storage_account" "func_storage" {
  name                     = "stderrickfunctions"
  resource_group_name      = azurerm_resource_group.sports_app.name
  location                 = azurerm_resource_group.sports_app.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
}