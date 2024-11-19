const userData = [
	{
		"name": "John Doe",
		"email": "john.doe@example.com",
		"password": "$2b$10$u5P/e45P.nRVNFjHTQmWTeJH81gK9oD7SykT9U.vC6XgYpM.jb7D6", // Real password: "password123"
		"role": "participant",
		"type": "normal",
		"profileimage": "https://picsum.photos/id/1/200/300",
		"dateOfBirth": "1990-01-01",
		"isActive": true,
		"createdAt": "2024-11-15T10:00:00Z",
		"updateAt": "2024-11-15T10:00:00Z"
	},
	{
		"name": "Jane Smith",
		"email": "jane.smith@example.com",
		"password": "$2b$10$QlzAknMLDHeTpQaVErnVLOpItlwYAkQXspxGiPEmkqf/fF44ZBGqC", // Real password: "securePass!45"
		"role": "speaker",
		"type": "google",
		"profileimage": "https://picsum.photos/id/2/200/300",
		"dateOfBirth": "1985-06-15",
		"isActive": false,
		"createdAt": "2024-11-15T10:00:00Z",
		"updateAt": "2024-11-15T10:00:00Z"
	},
	{
		"name": "Alice Johnson",
		"email": "alice.johnson@example.com",
		"password": "$2b$10$eMTQov.TmG5DLKl0hnAChOVvIXNyhFhr09fIobc/45RhGbMz8eypG", // Real password: "alice_12345"
		"role": "admin",
		"type": "normal",
		"profileimage": "https://picsum.photos/id/3/200/300",
		"dateOfBirth": "1995-12-01",
		"isActive": true,
		"createdAt": "2024-11-15T10:00:00Z",
		"updateAt": "2024-11-15T10:00:00Z"
	},
	{
		"name": "Robert Brown",
		"email": "robert.brown@example.com",
		"password": "$2b$10$ktXj5J9LVF1HvQRdp5vCke9bMSYBYFA/dR/cxClCZZIPe6eBX7amC", // Real password: "robert2024"
		"role": "participant",
		"type": "google",
		"profileimage": "https://picsum.photos/id/4/200/300",
		"dateOfBirth": "1992-08-20",
		"isActive": true,
		"createdAt": "2024-11-15T10:00:00Z",
		"updateAt": "2024-11-15T10:00:00Z"
	},
	{
		"name": "Emily Davis",
		"email": "emily.davis@example.com",
		"password": "$2b$10$PAZZ9fPztEKo2IxjeDrdbOkZdb3IFemDA6N4Qs6ZpQoRY9v7H2BqO", // Real password: "emily@789"
		"role": "speaker",
		"type": "normal",
		"profileimage": "https://picsum.photos/id/5/200/300",
		"dateOfBirth": "1988-11-03",
		"isActive": true,
		"createdAt": "2024-11-15T10:00:00Z",
		"updateAt": "2024-11-15T10:00:00Z"
	},
	{
		"name": "Michael Scott",
		"email": "michael.scott@example.com",
		"password": "$2b$10$f8yPjnZdmibBm03l7mOcnueozpPoOhBTylsyibw5KURgFEjlNSf.a", // Real password: "dundieAward"
		"role": "admin",
		"type": "normal",
		"profileimage": "https://picsum.photos/id/6/200/300",
		"dateOfBirth": "1975-03-15",
		"isActive": false,
		"createdAt": "2024-11-15T10:00:00Z",
		"updateAt": "2024-11-15T10:00:00Z"
	},
	{
		"name": "Olivia Wilson",
		"email": "olivia.wilson@example.com",
		"password": "$2b$10$Efy6Qk28B/mONhwMYRMaeuM2OwBJmqlQaETP1H3N/qsI3OCVo.1Ye", // Real password: "oliviaRules!"
		"role": "participant",
		"type": "normal",
		"profileimage": "https://picsum.photos/id/7/200/300",
		"dateOfBirth": "1997-07-07",
		"isActive": true,
		"createdAt": "2024-11-15T10:00:00Z",
		"updateAt": "2024-11-15T10:00:00Z"
	},
	{
		"name": "William Martinez",
		"email": "william.martinez@example.com",
		"password": "$2b$10$QtRUov55MoBc02fRdprm2.WZrsPSV33.HcdmEFo6wFh4yd0aTUXL2", // Real password: "martinez@321"
		"role": "participant",
		"type": "google",
		"profileimage": "https://picsum.photos/id/8/200/300",
		"dateOfBirth": "1993-05-19",
		"isActive": true,
		"createdAt": "2024-11-15T10:00:00Z",
		"updateAt": "2024-11-15T10:00:00Z"
	},
	{
		"name": "Sophia Taylor",
		"email": "sophia.taylor@example.com",
		"password": "$2b$10$YX8N.rqaEbs6Wov6CdIoj.jgtVZDFZWfw6UtyOYK/kfK8NUF/8FDW", // Real password: "sophia2023"
		"role": "speaker",
		"type": "normal",
		"profileimage": "https://picsum.photos/id/9/200/300",
		"dateOfBirth": "1991-09-10",
		"isActive": false,
		"createdAt": "2024-11-15T10:00:00Z",
		"updateAt": "2024-11-15T10:00:00Z"
	},
	{
		"name": "James Anderson",
		"email": "james.anderson@example.com",
		"password": "$2b$10$ObZJb4XZzPCmF2.oOkEaWuBOUw8nIdbFYhFY2mZyAFBp3wShE.Kiy", // Real password: "anderson@2024"
		"role": "admin",
		"type": "google",
		"profileimage": "https://picsum.photos/id/10/200/300",
		"dateOfBirth": "1980-02-25",
		"isActive": true,
		"createdAt": "2024-11-15T10:00:00Z",
		"updateAt": "2024-11-15T10:00:00Z"
	}
]



const sessionData = [
	{
		"session_id": "session001",
		"_id": "64a68b27f1b5c0f00dba214e",
		"email": "john.doe@example.com",
		"session_name": "Modern Web Development",
		"session_description": "An introduction to React, Vue, and Angular.",
		"date_time": "2024-12-01T10:00:00Z",
		"status": 0, // Still to be completed
		"session_image": "https://picsum.photos/id/101/300/200",
		"created_on": "2024-11-15T10:00:00Z",
		"venue": "Auditorium A",
		"acceptance": "accepted", // Accepted
		"updated_at": "2024-11-16T10:00:00Z"
	},
	{
		"session_id": "session002",
		"_id": "64a68b27f1b5c0f00dba214f",
		"email": "jane.smith@example.com",
		"session_name": "AI in Everyday Life",
		"session_description": "Exploring AI applications in daily activities.",
		"date_time": "2024-12-02T14:00:00Z",
		"status": 0, // pending
		"session_image": "https://picsum.photos/id/102/300/200",
		"created_on": "2024-11-14T12:00:00Z",
		"venue": "Conference Room B",
		"acceptance": "pending", // Pending
		"updated_at": "2024-11-17T15:00:00Z"
	},
	{
		"session_id": "session003",
		"_id": "64a68b27f1b5c0f00dba2150",
		"email": "alice.johnson@example.com",
		"session_name": "Cybersecurity 101",
		"session_description": "Understanding the basics of cybersecurity.",
		"date_time": "2024-11-30T09:00:00Z",
		"status": -1, // Still to be completed
		"session_image": "https://picsum.photos/id/103/300/200",
		"created_on": "2024-11-12T09:00:00Z",
		"venue": "Room 201",
		"acceptance": "rejected", // Rejected
		"updated_at": "2024-11-13T10:00:00Z"
	},
	{
		"session_id": "session004",
		"_id": "64a68b27f1b5c0f00dba2151",
		"email": "robert.brown@example.com",
		"session_name": "Cloud Computing Essentials",
		"session_description": "Dive into AWS, Azure, and Google Cloud.",
		"date_time": "2024-12-05T11:00:00Z",
		"status": 1, // Completed
		"session_image": "https://picsum.photos/id/104/300/200",
		"created_on": "2024-11-10T10:30:00Z",
		"venue": "Tech Hub Hall",
		"acceptance": "accepted", // Accepted
		"updated_at": "2024-11-18T12:00:00Z"
	},
	{
		"session_id": "session005",
		"_id": "64a68b27f1b5c0f00dba2152",
		"email": "emily.davis@example.com",
		"session_name": "The Future of Blockchain",
		"session_description": "How blockchain is shaping industries.",
		"date_time": "2024-12-03T16:00:00Z",
		"status": 0, // Still to be completed
		"session_image": "https://picsum.photos/id/120/300/200",
		"created_on": "2024-11-15T14:00:00Z",
		"venue": "Room 101",
		"acceptance": "accepted", // Accepted
		"updated_at": "2024-11-16T14:00:00Z"
	},
	{
		"session_id": "session006",
		"_id": "64a68b27f1b5c0f00dba2153",
		"email": "michael.scott@example.com",
		"session_name": "Leadership in Business",
		"session_description": "Mastering leadership in the corporate world.",
		"date_time": "2024-12-10T13:00:00Z",
		"status": 1, // Completed
		"session_image": "https://picsum.photos/id/106/300/200",
		"created_on": "2024-11-18T11:00:00Z",
		"venue": "Main Conference Hall",
		"acceptance": "accepted", // Accepted
		"updated_at": "2024-11-20T12:00:00Z"
	},
	{
		"session_id": "session007",
		"_id": "64a68b27f1b5c0f00dba2154",
		"email": "olivia.wilson@example.com",
		"session_name": "Digital Marketing Trends",
		"session_description": "Exploring trends shaping digital marketing.",
		"date_time": "2024-11-28T15:00:00Z",
		"status": -1, // Still to be completed
		"session_image": "https://picsum.photos/id/107/300/200",
		"created_on": "2024-11-10T10:00:00Z",
		"venue": "Room 301",
		"acceptance": "rejected", // Rejected
		"updated_at": "2024-11-14T12:00:00Z"
	},
	{
		"session_id": "session008",
		"_id": "64a68b27f1b5c0f00dba2155",
		"email": "william.martinez@example.com",
		"session_name": "DevOps Best Practices",
		"session_description": "Streamlining workflows with DevOps.",
		"date_time": "2024-12-08T09:00:00Z",
		"status": 1, // Completed
		"session_image": "https://picsum.photos/id/108/300/200",
		"created_on": "2024-11-19T08:00:00Z",
		"venue": "Tech Conference Room",
		"acceptance": "accepted", // Accepted
		"updated_at": "2024-11-20T11:00:00Z"
	},
	{
		"session_id": "session009",
		"_id": "64a68b27f1b5c0f00dba2156",
		"email": "sophia.taylor@example.com",
		"session_name": "Women in Tech",
		"session_description": "Celebrating women in the tech industry.",
		"date_time": "2024-12-11T10:00:00Z",
		"status": 0, // Still to be completed
		"session_image": "https://picsum.photos/id/109/300/200",
		"created_on": "2024-11-21T09:00:00Z",
		"venue": "Auditorium B",
		"acceptance": "pending", // Pending
		"updated_at": "2024-11-25T10:00:00Z"
	},
	{
		"session_id": "session010",
		"_id": "64a68b27f1b5c0f00dba2157",
		"email": "james.anderson@example.com",
		"session_name": "Startup Innovations",
		"session_description": "Exploring innovative startup ideas.",
		"date_time": "2024-12-15T14:00:00Z",
		"status": 1, // Completed
		"session_image": "https://picsum.photos/id/110/300/200",
		"created_on": "2024-11-20T14:00:00Z",
		"venue": "Startup Pavilion",
		"acceptance": "accepted", // Accepted
		"updated_at": "2024-11-22T15:00:00Z"
	}
]

const registrationData = [
	{
		"_id": "64b68b27f1b5c0f00dba215e",
		"registration_id": "reg001",
		"email": "john.doe@example.com",
		"session_id": "session001",
		"date_time": "2024-11-16T12:00:00Z"
	},
	{
		"_id": "64b68b27f1b5c0f00dba215f",
		"registration_id": "reg002",
		"email": "jane.smith@example.com",
		"session_id": "session002",
		"date_time": "2024-11-14T16:00:00Z"
	},
	{
		"_id": "64b68b27f1b5c0f00dba2160",
		"registration_id": "reg003",
		"email": "alice.johnson@example.com",
		"session_id": "session003",
		"date_time": "2024-11-12T11:30:00Z"
	},
	{
		"_id": "64b68b27f1b5c0f00dba2161",
		"registration_id": "reg004",
		"email": "robert.brown@example.com",
		"session_id": "session004",
		"date_time": "2024-11-11T10:45:00Z"
	},
	{
		"_id": "64b68b27f1b5c0f00dba2162",
		"registration_id": "reg005",
		"email": "emily.davis@example.com",
		"session_id": "session005",
		"date_time": "2024-11-16T14:30:00Z"
	},
	{
		"_id": "64b68b27f1b5c0f00dba2163",
		"registration_id": "reg006",
		"email": "michael.scott@example.com",
		"session_id": "session006",
		"date_time": "2024-11-18T13:15:00Z"
	},
	{
		"_id": "64b68b27f1b5c0f00dba2164",
		"registration_id": "reg007",
		"email": "olivia.wilson@example.com",
		"session_id": "session007",
		"date_time": "2024-11-10T12:20:00Z"
	},
	{
		"_id": "64b68b27f1b5c0f00dba2165",
		"registration_id": "reg008",
		"email": "william.martinez@example.com",
		"session_id": "session008",
		"date_time": "2024-11-19T08:30:00Z"
	},
	{
		"_id": "64b68b27f1b5c0f00dba2166",
		"registration_id": "reg009",
		"email": "sophia.taylor@example.com",
		"session_id": "session009",
		"date_time": "2024-11-21T09:15:00Z"
	},
	{
		"_id": "64b68b27f1b5c0f00dba2167",
		"registration_id": "reg010",
		"email": "james.anderson@example.com",
		"session_id": "session010",
		"date_time": "2024-11-22T15:45:00Z"
	}
]

const feedbackData = [
	{
		"_id": "64c68b27f1b5c0f00dba2170",
		"feedback_id": "feedback001",
		"email": "john.doe@example.com",
		"feedback": "The session was very informative and well-structured.",
		"session_id": "session001",
		"date_time": "2024-12-01T12:30:00Z"
	},
	{
		"_id": "64c68b27f1b5c0f00dba2171",
		"feedback_id": "feedback002",
		"email": "jane.smith@example.com",
		"feedback": "Great insights into AI applications. Loved the examples!",
		"session_id": "session002",
		"date_time": "2024-12-02T16:15:00Z"
	},
	{
		"_id": "64c68b27f1b5c0f00dba2172",
		"feedback_id": "feedback003",
		"email": "alice.johnson@example.com",
		"feedback": "The cybersecurity basics were explained clearly. Good session.",
		"session_id": "session003",
		"date_time": "2024-11-30T11:45:00Z"
	},
	{
		"_id": "64c68b27f1b5c0f00dba2173",
		"feedback_id": "feedback004",
		"email": "robert.brown@example.com",
		"feedback": "Informative session on cloud computing. Highly recommended!",
		"session_id": "session004",
		"date_time": "2024-12-05T12:30:00Z"
	},
	{
		"_id": "64c68b27f1b5c0f00dba2174",
		"feedback_id": "feedback005",
		"email": "emily.davis@example.com",
		"feedback": "Blockchain future looks promising. Great presentation!",
		"session_id": "session005",
		"date_time": "2024-12-03T18:00:00Z"
	},
	{
		"_id": "64c68b27f1b5c0f00dba2175",
		"feedback_id": "feedback006",
		"email": "michael.scott@example.com",
		"feedback": "Leadership strategies were well explained. Excellent talk!",
		"session_id": "session006",
		"date_time": "2024-12-10T14:45:00Z"
	},
	{
		"_id": "64c68b27f1b5c0f00dba2176",
		"feedback_id": "feedback007",
		"email": "olivia.wilson@example.com",
		"feedback": "Digital marketing trends were very insightful. Good job!",
		"session_id": "session007",
		"date_time": "2024-11-28T17:00:00Z"
	},
	{
		"_id": "64c68b27f1b5c0f00dba2177",
		"feedback_id": "feedback008",
		"email": "william.martinez@example.com",
		"feedback": "DevOps best practices were thoroughly covered. Very useful!",
		"session_id": "session008",
		"date_time": "2024-12-08T10:45:00Z"
	},
	{
		"_id": "64c68b27f1b5c0f00dba2178",
		"feedback_id": "feedback009",
		"email": "sophia.taylor@example.com",
		"feedback": "Women in Tech was an inspiring session. Thanks for organizing!",
		"session_id": "session009",
		"date_time": "2024-12-11T12:00:00Z"
	},
	{
		"_id": "64c68b27f1b5c0f00dba2179",
		"feedback_id": "feedback010",
		"email": "james.anderson@example.com",
		"feedback": "Startup innovations session was excellent and motivating!",
		"session_id": "session010",
		"date_time": "2024-12-15T16:30:00Z"
	}
]


export { sessionData, userData, registrationData, feedbackData };
