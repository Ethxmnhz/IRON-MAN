import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

# Initialize Firebase Admin SDK
cred = credentials.Certificate('dash-13064-firebase-adminsdk-kuloc-25ae2d2596.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://dash-13064-default-rtdb.firebaseio.com/'  # Your database URL
})

# Reference to the Firebase database for Maharashtra
maharashtra_ref = db.reference('states/Maharashtra')

# Inventory data for police stations in Maharashtra
inventory_data = {
    'Sangli': {
        'Sangli Police Station': {
            'inventory': {
                'Laptops': {
                    'LAP-001': {
                        'Model': 'Dell Latitude 7400',
                        'Assigned To': 'Officer John Doe',
                        'Status': 'In Use',
                        'Location': 'District HQ, IT Room',
                        'Purchase Date': '2022-01-15',
                        'Warranty Expiry': '2024-01-15',
                        'Last Maintenance': '2023-06-20',
                        'Lifecycle Status': 'Active',
                        'Comments': 'Scheduled for maintenance in 6 months.'
                    }
                }
            }
        },
        'Miraj Police Station': {
            'inventory': {
                'Desktops': {
                    'DESK-008': {
                        'Model': 'HP ProDesk 400 G5',
                        'Assigned To': 'District Station 4',
                        'Status': 'Available',
                        'Location': 'Admin Office',
                        'Purchase Date': '2021-11-10',
                        'Warranty Expiry': '2023-11-10',
                        'Last Maintenance': '2023-05-10',
                        'Lifecycle Status': 'Active',
                        'Comments': 'Requires upgrade by 2025.'
                    }
                }
            }
        }
    },
    'Mumbai': {
        'Raigarh Police Station': {
            'inventory': {
                'Radios': {
                    'COMM-RAD-014': {
                        'Model': 'Motorola APX 6000',
                        'Assigned To': 'Patrol Unit A',
                        'Status': 'In Use',
                        'Location': 'Patrol Car #47',
                        'Purchase Date': '2022-07-12',
                        'Warranty Expiry': '2025-07-12',
                        'Last Maintenance': '2023-05-25',
                        'Lifecycle Status': 'Active',
                        'Comments': 'Working condition, checked monthly.'
                    }
                }
            }
        },
        'Navi Mumbai Police Station': {
            'inventory': {
                'CCTV Cameras': {
                    'SURV-CCTV-101': {
                        'Model': 'Hikvision DS-2CD2043',
                        'Assigned To': 'Main Building Surveillance',
                        'Status': 'In Use',
                        'Location': 'Gate 3, Station 4',
                        'Purchase Date': '2022-09-10',
                        'Warranty Expiry': '2024-09-10',
                        'Last Maintenance': '2023-08-05',
                        'Lifecycle Status': 'Active',
                        'Comments': 'Next maintenance scheduled in 12 months.'
                    }
                },
                'Laptops': {
                    'LAP-005': {
                        'Model': 'Lenovo ThinkPad X1',
                        'Assigned To': 'IT Admin',
                        'Status': 'In Use',
                        'Location': 'Control Room',
                        'Purchase Date': '2021-12-15',
                        'Warranty Expiry': '2024-12-15',
                        'Last Maintenance': '2023-07-10',
                        'Lifecycle Status': 'Active',
                        'Comments': 'No issues reported.'
                    }
                },
                'Desktops': {
                    'DESK-010': {
                        'Model': 'Dell OptiPlex 7070',
                        'Assigned To': 'Admin Office',
                        'Status': 'Available',
                        'Location': 'Office',
                        'Purchase Date': '2021-09-20',
                        'Warranty Expiry': '2023-09-20',
                        'Last Maintenance': '2023-06-15',
                        'Lifecycle Status': 'Active',
                        'Comments': 'Next maintenance in 6 months.'
                    }
                },
                'Printers': {
                    'PRN-012': {
                        'Model': 'HP LaserJet Pro',
                        'Assigned To': 'Admin Department',
                        'Status': 'In Use',
                        'Location': 'Printing Room',
                        'Purchase Date': '2021-03-10',
                        'Warranty Expiry': '2023-03-10',
                        'Last Maintenance': '2023-02-01',
                        'Lifecycle Status': 'Active',
                        'Comments': 'Working condition.'
                    }
                },
                'Routers': {
                    'NET-ROUT-008': {
                        'Model': 'Cisco ISR 4321',
                        'Assigned To': 'Network Infrastructure',
                        'Status': 'In Use',
                        'Location': 'Main IT Room',
                        'Purchase Date': '2020-08-05',
                        'Warranty Expiry': '2023-08-05',
                        'Last Maintenance': '2023-06-20',
                        'Lifecycle Status': 'Near End of Life',
                        'Comments': 'Requires replacement next year.'
                    }
                },
                'Radios': {
                    'COMM-RAD-015': {
                        'Model': 'Motorola APX 8000',
                        'Assigned To': 'Patrol Unit B',
                        'Status': 'In Use',
                        'Location': 'Patrol Car #52',
                        'Purchase Date': '2021-05-12',
                        'Warranty Expiry': '2024-05-12',
                        'Last Maintenance': '2023-07-15',
                        'Lifecycle Status': 'Active',
                        'Comments': 'Checked monthly.'
                    }
                },
                'Body Cameras': {
                    'SURV-BODY-003': {
                        'Model': 'Axon Body 3',
                        'Assigned To': 'Officer Raj Singh',
                        'Status': 'In Use',
                        'Location': 'Personal Equipment',
                        'Purchase Date': '2021-10-05',
                        'Warranty Expiry': '2024-10-05',
                        'Last Maintenance': '2023-06-05',
                        'Lifecycle Status': 'Active',
                        'Comments': 'No issues reported.'
                    }
                },
                'Scanners': {
                    'SCAN-007': {
                        'Model': 'Fujitsu ScanSnap iX1500',
                        'Assigned To': 'Documentation Office',
                        'Status': 'In Use',
                        'Location': 'Main Office',
                        'Purchase Date': '2020-09-10',
                        'Warranty Expiry': '2023-09-10',
                        'Last Maintenance': '2023-04-15',
                        'Lifecycle Status': 'Active',
                        'Comments': 'No issues reported.'
                    }
                },
                'Tasers': {
                    'WEAP-TASER-002': {
                        'Model': 'Taser X2',
                        'Assigned To': 'Officer Patil',
                        'Status': 'In Use',
                        'Location': 'Equipment Locker',
                        'Purchase Date': '2021-02-12',
                        'Warranty Expiry': '2024-02-12',
                        'Last Maintenance': '2023-05-20',
                        'Lifecycle Status': 'Active',
                        'Comments': 'Operational, tested monthly.'
                    }
                }
            }
        }
    }
}

# Function to add inventory data to the respective police stations
def add_inventory_to_police_stations():
    for district, stations in inventory_data.items():
        for station_name, data in stations.items():
            # Reference to the police station in Firebase
            police_station_ref = maharashtra_ref.child('districts').child(district).child('policeStations').child(station_name)
            # Add inventory data
            police_station_ref.update(data)

add_inventory_to_police_stations()

print("Inventory data for police stations in Maharashtra added successfully.")
