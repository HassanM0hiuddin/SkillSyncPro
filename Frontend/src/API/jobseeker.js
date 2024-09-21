import { TrySharp } from "@mui/icons-material";

class JobseekerController {
  constructor() {
    (this.jobUrl = "http://localhost:3000/api/v1/jobs"),
      (this.jobSeekerUrl = "http://localhost:3000/api/v1/jobseeker");
  }
  async getJobs() {
    try {
      const response = await fetch(this.jobUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return {
        data: await response.json(),
        status: response.status,
      };
    } catch (error) {
      return { status: 500, message: "Internal server error" };
    }
  }

  async getJobDescription(id){
    try{
      const response = await fetch(`${this.jobUrl}/description?id=${id}` , {
        method: "GET",
        headers:{
          "Content-Type": "application/json"
        }
      });

      return {
        data : await response.json(),
        status: response.status
      }

    }catch(err){
      return { status: 500 , message : "Internal server error"}
    }
  }

  async applyJob(data, token) {
    try {
      const response = await fetch(this.jobSeekerUrl + "/job/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(data),
      });

      return {
        data: await response.json(),
        status: response.status,
      };
    } catch (error) {
      return {
        status: 500,
        message: "Internal Server Error",
      };
    }
  }

  async getAppliedJobs(token) {
    try {
      const response = await fetch(this.jobSeekerUrl + "/jobs/applied", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });

      return {
        data: await response.json(),
        status: response.status,
      };
    } catch (error) {
      return {
        status: 500,
        message: "Internal Server Error",
      };
    }
  }

  async getApplications(token) {
    try {
      const response = await fetch(this.jobSeekerUrl + "/applications", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });

      return {
        data: await response.json(),
        status: response.status,
      };
    } catch (error) {
      return {
        status: 500,
        message: "Internal Server Error",
      };
    }
  }

  async getCompanies() {
    try {
      const response = await fetch(this.jobSeekerUrl + "/companies", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      return {
        data: await response.json(),
        status: response.status,
      };
    } catch (error) {
      return {
        status: 500,
        message: "Internal Server Error",
      };
    }
  }

  async getAssessmentById(id) {
    console.log("ID", id);
    try {
      const response = await fetch(`${this.jobSeekerUrl}/assessment?id=${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      return {
        data: await response.json(),
        status: response.status,
      };
    } catch (error) {
      return {
        status: 500,
        message: "Internal Server Error",
      };
    }
  }

  async startApplication(jobId, token) {
    try {
      const response = await fetch(this.jobSeekerUrl + "/startApplication", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ jobId }),
      });

      return {
        data: await response.json(),
        status: response.status,
      };
    } catch (error) {
      return {
        status: 500,
        message: "Internal Server Error",
      };
    }

  }

  async submitApplication(data, token) {
    console.log("Data", data);
    try {
      const response = await fetch(this.jobSeekerUrl + "/application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(data),
      });

      return {
        data: await response.json(),
        status: response.status,
      };
    } catch (error) {
      return {
        status: 500,
        message: "Internal Server Error",
      };
    }
  }

  async submitApplication(data, token) {
    try {
      console.log("Data going to backend", data);
      const response = await fetch(this.jobSeekerUrl + "/submitApplication", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(data),
      });

      return {
        data: await response.json(),
        status: response.status,
      };
    } catch (error) {
      return {
        status: 500,
        message: "Internal Server Error",
      };
    }
  }
}

export default new JobseekerController();
