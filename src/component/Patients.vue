<script setup>
import {ref} from "vue"
const patients = [
    {
        id: 1,
        firstName: "john",
        lastNam: "Doe",
        email: "johndoe@example.com",
        phone: "07212345",
        residence: "1234, Main Street",
        nationalId: "12345677",
        dob: "1995-04-03",
    },
    {
        id: 2,
        firstName: "john",
        lastNam: "Doe",
        email: "johndoe@example.com",
        phone: "07212345",
        residence: "1234, Main Street",
        nationalId: "12345677",
        dob: "1996-04-03",
     },
     {
        id: 3,
        firstName: "john",
        lastNam: "Doe",
        email: "johndoe@example.com",
        phone: "07212345",
        residence: "1234, Main Street",
        nationalId: "12345677",
        dob: "1997-04-03",
     },
     {
        id: 4,
        firstName: "john",
        lastNam: "Doe",
        email: "johndoe@example.com",
        phone: "07212345",
        residence: "1234, Main Street",
        nationalId: "12345677",
        dob: "1998-04-03",
     
    }
]
const showAddDialog= ref(false)
</script>

<template>
    <v-container>
        <v-row>
            <v-col> md="10">
                <h1>patients</h1>
            </v-col>
            <v-col md="2">
                <v-btn class="ma-2" color="primary" icon="mdi-plus" @click="showAddDialog= true"></v-btn>
            </v-col>

        </v-row>

        <v-row>
            <v-col>
                <v-table class="border">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Residence</th>
                        <th>National Id</th>
                        <th>Date of Brirth</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in patients">
                            <td>{{ item.firstName + " " + item.lastName }}</td>
                            <td>{{ item.phone }}</td>
                            <td>{{ item.email }}</td>
                            <td>{{ item.residence}}</td>
                            <td>{{ item.nationalId }}</td>
                            <td>{{ item.dob }}</td>
                            <td>
                                <v-btn color="primary" size="small">
                                 <v-icon icon="mdi-eye"></v-icon>
                                View
                                </v-btn>
                            </td>
                        </tr>
                    </tbody>
                </v-table>
            </v-col>
        </v-row>
    </v-container>
<!-- add patients-->
    <v-dialog v-model="showAddDialog" max-width="600px">
        <v-form>
            <v-card>
                <v-row>
                    <v-card-text>Add Patients</v-card-text>
                <v-spacer></v-spacer>
                    <v-btn class="ma-2" color="primary" icon="mdi-close" @click="showAddDialog= false"></v-btn>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <v-text-field label="First Name"></v-text-field>
                    </v-col>
                    <v-col md="6">
                        <v-text-field label="phone" outlined></v-text-field>
                    </v-col>
                </v-row>
                 <v-row>
                    <v-col md="6">
                        <v-text-field label="email"></v-text-field>
                    </v-col>
                    <v-col md="6">
                        <v-text-field label="residence" outlined></v-text-field>
                    </v-col>
                </v-row>
                 <v-row>
                    <v-col md="6">
                        <v-text-field label="nationalId"></v-text-field>
                    </v-col>
                    <v-col md="6">
                        <v-text-field label="dob" outlined></v-text-field>
                    </v-col>
                </v-row>
            </v-card>
        </v-form>
    </v-dialog>
</template>