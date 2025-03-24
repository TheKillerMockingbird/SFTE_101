DB = []

record = {
    'FirstName': 'False',
    'LastName': 'Identity',
    'Address': '999 Avernus Drive',
    'City': 'Baator',
    'State': 'Nine Hells',
    'ZipCode': '666666',
    'Phone': '098-765-4321'
}

DB.append(record)

record2 = {
    'FirstName': 'Jill',
    'LastName': 'Baker',
    'Address': '456 Elm St',
    'City': 'Los Angeles',
    'State': 'CA',
    'ZipCode': '90001',
    'Phone': '741-654-0349'
}

record3 = {
    'FirstName': 'Bob',
    'LastName': 'Johnson',
    'Address': '789 Oak St',
    'City': 'Chicago',
    'State': 'IL',
    'ZipCode': '60601',
    'Phone': '555-888-3854'
}

DB.append(record2)
DB.append(record3)

for record in DB:
    print(f"Name:\t {record['FirstName']} {record['LastName']}")
    print(f"Address:\t {record['Address']}")
    print(f"\t {record['City']}, {record['State']}, {record['ZipCode']}")