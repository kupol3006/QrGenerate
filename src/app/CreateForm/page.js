'use client';
import { useState } from "react";
import {
    Button,
    Card,
    CardContent,
    Typography,
    Grid,
    Box,
    Chip,
} from "@mui/material";
import PageHeader from "../Components/FormBuidler/HeaderForm";
import PreviewIcon from '@mui/icons-material/Preview';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import { useRouter } from 'next/navigation';

const dashboardData = {
    totalVisits: 11,
    totalSubmissions: 3,
    submissionRate: "27.273%",
    bounceRate: "27.273%",
    forms: [
        {
            id: "ifjhgjhkkkg",
            name: "ifjhgjhkkkg",
            createdAt: "9 days ago",
            description: null,
            status: "Draft",
        },
        {
            id: "sdadadadsda",
            name: "sdadadadsda",
            createdAt: "9 days ago",
            description: null,
            status: "Published",
            views: 2,
            submissions: 0,
        },
    ],
};

const dashboardCards = [
    {
        title: "Total visits",
        value: dashboardData.totalVisits,
        description: "All time form visits",
        icon: "PreviewIcon",
        shadowColor: "shadow-blue-500",
        textColor: "text-blue-500",
    },
    {
        title: "Total submissions",
        value: dashboardData.totalSubmissions,
        description: "All time form submissions",
        icon: "🗓️",
        shadowColor: "shadow-yellow-500",
        textColor: "text-yellow-500",
    },
    // {
    //     title: "Submission rate",
    //     value: dashboardData.submissionRate,
    //     description: "Visits that result in form submission",
    //     icon: "📈",
    //     shadowColor: "shadow-green-500",
    //     textColor: "text-green-500",
    // },
    // {
    //     title: "Bounce rate",
    //     value: dashboardData.bounceRate,
    //     description: "Visits that leaves without interacting",
    //     icon: "🏃‍♂️",
    //     shadowColor: "shadow-red-500",
    //     textColor: "text-red-500",
    // },
];

const Dashboard = () => {
    const [forms, setForms] = useState(dashboardData.forms);
    const router = useRouter();

    return (
        <div className="container mx-auto p-2">
            <PageHeader />

            <Grid container spacing={3} className="mt-3">
                {dashboardCards.map((card, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card className={`rounded-lg ${card.shadowColor} shadow-md`} style={{ borderRadius: '12px' }}>
                            <CardContent className="text-left">
                                <div className="flex justify-between">
                                    <Typography variant="h6" component="div" className="font-bold">
                                        {card.title}
                                    </Typography>
                                    <Button endIcon={<PreviewIcon />}></Button>
                                </div>
                                <Typography variant="h3" className={`my-2 ${card.textColor} font-bold`}>
                                    {card.value}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" className="mb-2">
                                    {card.description}
                                </Typography>

                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Typography variant="h5" className="mt-8 font-bold text-left">
                Your forms
            </Typography>

            <Grid container spacing={3} className="mt-4">
                <Grid item xs={12} sm={6} md={4}>
                    <Card className="h-full rounded-lg shadow-md">
                        <CardContent className="flex flex-col justify-center items-center h-full border-dashed border-4 border-gray-300 hover:bg-gray-100">
                            <Button
                                variant="contained"
                                startIcon={<NoteAddIcon />}
                                onClick={() => router.push('/FormBuilder')}
                                className="w-full h-full flex flex-col items-center justify-center bg-transparent text-gray-400 border-none shadow-none hover:bg-gray-100 hover:text-gray-800 hover:shadow-none text-[15px]"
                            >
                                Create new form
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                {forms.map((form) => (
                    <Grid key={form.id} item xs={12} sm={6} md={4}>
                        <Card className="rounded-lg shadow-md">
                            <CardContent className="w-[400px] h-[203px]">
                                <Typography variant="h6" component="div" className="font-bold">
                                    {form.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" className="mb-2">
                                    {form.createdAt}
                                </Typography>
                                {form.description && (
                                    <Typography variant="body2" className="mt-2">
                                        {form.description}
                                    </Typography>
                                )}
                                <Box className="mt-4">
                                    {form.status === "Draft" && (
                                        <Chip label="Draft" color="error" />
                                    )}
                                    {form.status === "Published" && (
                                        <Chip label="Published" color="success" />
                                    )}
                                </Box>
                                <Box className="w-[368px] h-[47px] mt-4 flex justify-between">

                                    {form.status === "Published" ? (
                                        <Button
                                            variant="contained"
                                            endIcon={<span>➡️</span>}
                                            className="bg-[#111827] text-white font-semibold text-[15px]"
                                            fullWidth
                                        >
                                            View submissions
                                        </Button>
                                    )
                                        : (
                                            <Button
                                                variant="contained"
                                                endIcon={<EditCalendarIcon />}
                                                fullWidth
                                                className="bg-[#F5F6F8] text-[#111827] font-semibold text-[15px]"
                                            >
                                                Edit form
                                            </Button>
                                        )}
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Dashboard;
